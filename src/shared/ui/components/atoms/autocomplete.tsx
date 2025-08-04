'use client';

import { useEffect, useRef, useState } from 'react';

import { Text } from './text';
import { TextField } from './text-field';

export const Autocomplete = ({
  items,
  placeholder,
  label,
  onChange,
  disabled,
  initialValue = '',
  hint,
}: {
  items: { value: string; label: string }[];
  onChange?: (value: string) => void;
  initialValue?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  hint?: string;
}) => {
  const [search, setSearch] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  const autocompleteRef = useRef<HTMLDivElement>(null);

  const filteredItems = search
    ? items.filter(item =>
        item.label.toLowerCase().includes(search.toLowerCase()),
      )
    : [];

  const handleSelect = (label: string) => {
    setSearch(label);
    onChange?.(label);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={autocompleteRef} className="relative w-full">
      <TextField
        value={search}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        onChange={e => {
          setSearch(e.target.value);
          onChange?.(e.target.value);
          setIsOpen(true);
        }}
        hint={hint}
      />
      {isOpen && search && (
        <ul className="absolute top-[110%] left-0 z-10 flex max-h-52 w-full flex-col overflow-y-auto rounded-lg bg-[#111] p-2 transition-all duration-300 ease-in-out">
          {filteredItems.length ? (
            filteredItems.map(item => (
              <li
                key={item.value}
                onClick={() => handleSelect(item.label)}
                className="z-20 cursor-pointer border-b-[#1D1D1D] px-6 py-4 transition duration-300 ease-in-out hover:bg-[#161616]"
              >
                <Text size="md" color="muted">
                  {item.label}
                </Text>
              </li>
            ))
          ) : (
            <div className="rounded-lg bg-[#f9f8fc] px-4 py-2">
              <Text size="md" color="muted">
                No Results
              </Text>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};
