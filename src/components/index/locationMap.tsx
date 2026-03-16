import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

type Props = {
  lat: number
  lon: number
}

export default function LocationMap({ lat, lon }: Props) {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[lat, lon]}>
        <Popup>
          Your location
        </Popup>
      </Marker>

    </MapContainer>
  )
}