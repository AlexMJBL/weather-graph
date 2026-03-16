import { FaSearch } from "react-icons/fa";
import type { City } from "../../types/city";
import { useLocation } from "../../hooks/useLocation";
import { useState } from "react"

type Props = {
    onSelectCity: (city: City) => void
}

export default function SearchBar({ onSelectCity }: Props) {

    const [searchValue, setSearchValue] = useState("")
    const { locations, getLocation, clearLocations } = useLocation()

    async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        setSearchValue(value)

        if (value.length < 2) {
            return
        }

        getLocation(value)
    }

    function handleSelectCity(city: City) {
        setSearchValue(`${city.name}, ${city.country}`)
        onSelectCity(city)
        clearLocations()
    }

    return (
        <div className="relative w-72">

            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
                <FaSearch className="text-gray-400" />
                <input
                    className="w-full outline-none"
                    placeholder="Enter location"
                    onChange={handleSearch}
                    value={searchValue}
                />
            </div>

            {locations?.length > 0  && searchValue.length >= 2 && (
                <ul className="absolute top-full left-0 w-full bg-white border rounded-lg shadow mt-1 z-10">

                    {locations.map((l) => (
                        <li
                            key={`${l.name}-${l.latitude}`}
                            onClick={() => handleSelectCity(l)}
                            className="px-3 py-2 hover:bg-blue-900 cursor-pointer hover:text-white"
                        >
                            {l.name}, {l.country}
                        </li>
                    ))}

                </ul>
            )}

        </div>
    )
}