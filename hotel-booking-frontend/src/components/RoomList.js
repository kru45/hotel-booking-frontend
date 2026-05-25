import React, { useState } from 'react';
import RoomCard from './RoomCard';

function RoomList({ showNotification }) {
  // Hardcoded initial data for practice, simulating what an API would send
  const [rooms, setRooms] = useState([
    {
      id: 101,
      name: "Deluxe Ocean View Suite",
      price: "$150/night",
      amenities: "Free Wi-Fi, King Bed, AC, Balcony",
      status: "Available"
    },
    {
      id: 102,
      name: "Executive Business Room",
      price: "$200/night",
      amenities: "Free Wi-Fi, Work Desk, Mini Bar, Gym Access",
      status: "Available"
    },
    {
      id: 103,
      name: "Cozy Budget Single Room",
      price: "$65/night",
      amenities: "Free Wi-Fi, Queen Bed, Shared Kitchen",
      status: "Sold Out"
    }
  ]);

  const bookRoom = (roomId, roomName) => {
    // Update the room status to 'Booked' locally when clicked
    setRooms(prevRooms =>
      prevRooms.map(room =>
        room.id === roomId ? { ...room, status: "Booked" } : room
      )
    );
    showNotification(`Successfully reserved the ${roomName}! Check your email for details.`);
  };

  return (
    <div className="room-grid">
      {rooms.map((room) => (
        <RoomCard 
          key={room.id} 
          room={room} 
          onBook={bookRoom}
        />
      ))}
    </div>
  );
}

export default RoomList;