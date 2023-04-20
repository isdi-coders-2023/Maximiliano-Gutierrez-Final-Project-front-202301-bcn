import { useState, useCallback, useEffect, useRef } from "react";
import { Playlist, Song } from "../../types/playlistsTypes/types";
import FilterByBpmStyled from "./FilterByBpmStyled";

interface FilterByBpmProps {
  playlists: Playlist[];
  onFilteredSongs: (filteredSongs: Song[]) => void;
  className?: string;
}

interface FilterOption {
  label: string;
  value: number;
}

const options: FilterOption[] = [
  { label: "120 bpm or less", value: 120 },
  { label: "121 bpm", value: 121 },
  { label: "122 bpm", value: 122 },
  { label: "123 bpm", value: 123 },
  { label: "124 bpm", value: 124 },
  { label: "125 bpm", value: 125 },
  { label: "126 bpm", value: 126 },
  { label: "127 bpm", value: 127 },
  { label: "128 bpm", value: 128 },
  { label: "129 bpm and more", value: 129 },
];

const FilterByBpm: React.FC<FilterByBpmProps> = ({
  playlists,
  onFilteredSongs,
}): JSX.Element => {
  const [selectedFilters, setSelectedFilters] = useState<number[]>([]);

  const filterSongs = useCallback(() => {
    const allSongs = playlists.flatMap((playlist) => playlist.songs);

    const filteredSongs = allSongs.filter((song) => {
      const songBpm = song.bpmTrack;
      return selectedFilters.some((filter) => {
        const min = filter;
        const max = filter === 129 ? Infinity : filter + 1;
        return songBpm >= min && songBpm < max;
      });
    });

    onFilteredSongs(filteredSongs);
  }, [playlists, selectedFilters, onFilteredSongs]);

  const filterSongsRef = useRef(filterSongs);

  useEffect(() => {
    filterSongsRef.current = filterSongs;
  }, [filterSongs]);

  const handleFilterChange = useCallback((value: number, checked: boolean) => {
    if (checked) {
      setSelectedFilters((prev) => [...prev, value]);
    } else {
      setSelectedFilters((prev) => prev.filter((filter) => filter !== value));
    }
  }, []);

  useEffect(() => {
    filterSongsRef.current();
  }, [selectedFilters]);

  return (
    <FilterByBpmStyled>
      <h3>Filter by bpm:</h3>
      {options.map((option) => (
        <div className="filter-options" key={option.value}>
          <label>
            <input
              type="checkbox"
              value={option.value}
              onChange={(event) =>
                handleFilterChange(option.value, event.target.checked)
              }
              className="filter-options__checkbox"
            />
            {option.label}
          </label>
        </div>
      ))}
    </FilterByBpmStyled>
  );
};

export default FilterByBpm;
