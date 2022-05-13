import room1 from '../Image/singleRoom.jpg';
import room2 from '../Image/Double-Room.jpg';
import room3 from '../Image/Queen-Room.jpg';
import room4 from '../Image/King-Room.jpg';
import room5 from '../Image/Executive-suite-Room.jpg';
import room6 from '../Image/Junior-suite-Room.jpg';
import room7 from '../Image/presidential-suite.jpg';
import room8 from '../Image/murphy-rooms.jpg'
import room9 from '../Image/r4.jpg';
import room10 from '../Image/r5.jpg';
import room11 from '../Image/dream7.jpg';
import room12 from '../Image/dream9.jpg';




const roomData = [
    {
        id:1001,
        type: 'Single Room',
        price: 600,
        image: room1,
        is_available: false
    },
    {
        id:1002,
        type: 'Double Room',
        price: 1200,
        image: room2,
        is_available: false
    },
    {
        id:1003,
        type: 'Queen Room',
        price: 1300,
        image: room3,
        is_available: true
    },
    {
        id:1004,
        type: 'King Room',
        price: 1400,
        image: room4,
        is_available: true
    },
    {
        id:1005,
        type: 'Executive Suite',
        price: 1500,
        image: room5,
        is_available: false
    },
    {
        id:1006,
        type: 'Junior Suite',
        price: 1600,
        image: room6,
        is_available: true
    },
    {
        id:1007,
        type: 'Presidential Suite',
        price: 2000,
        image: room7,
        is_available: false
    },
    {
        id:1008,
        type: 'Murphy Room',
        price: 2500,
        image: room8,
        is_available: true
    },
    {
        id:1009,
        type: 'Best price Room',
        price: 800,
        image: room9,
        is_available: true
    },
    {
        id:1010,
        type: 'Double ',
        price: 2000,
        image: room10,
        is_available: false
    },
    {
        id:1011,
        type: 'couple',
        price: 2500,
        image: room11,
        is_available: true
    },
    {
        id:1012,
        type: 'family',
        price: 3000,
        image: room12,
        is_available: true
    },
]

export default roomData;