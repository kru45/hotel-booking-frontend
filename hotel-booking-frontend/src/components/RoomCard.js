import React from 'react';

function RoomCard({ room, onBook }) {
  const isUnavailable = room.status === "Sold Out" || room.status === "Booked";

  return (
    <div className={`room-card ${isUnavailable ? 'card-disabled' : ''}`}>
      <div>
        <div className="room-status-badge" data-status={room.status}>
          {room.status}
        </div>
        <h3>{room.name}</h3>
        <p className="room-price">{room.price}</p>
        <p className="room-amenities">
          ✨ <span>Amenities:</span> {room.amenities}
        </p>
      </div>
      
      <button
        onClick={() => onBook(room.id, room.name)}
        disabled={isUnavailable}
        className="btn-reserve"
      >
        {room.status === "Available" ? 'Reserve Room' : room.status}
      </button>
    </div>
  );
}

export default RoomCard;