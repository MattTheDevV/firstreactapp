import EvenCard from "./EventCard";

const userList = [
    {
      id: "1",
      name: "User1",
    },
    {
      id: "2",
      name: "User2",
    },
    {
      id: "3",
      name: "User3",
    },
];
 

const eventList = [
    {
        id: "0",
        date: "2024-02-28",
        name: "Global Groove Gala",
        description: "A multicultural celebration of music, dance, and cuisine from around the world, fostering unity through art.",
        willAttend: ["User1"],
        willNotAttend: ["User2"],
    },
    {
        id: "a",
        date: "2024-03-06",
        name: "TechXpo 2024",
        description: "A showcase of cutting-edge technology innovations, featuring workshops, demos, and talks by industry leaders.",
        willAttend: ["User1"],
        willNotAttend: ["User2"],
    },
    {
        id: "b",
        date: "2024-03-13",
        name: "Green Living Expo",
        description: "An expo highlighting sustainable solutions and eco-friendly practices for a greener planet.",
        willAttend: ["User1"],
        willNotAttend: [],
    },
    {
        id: "c",
        date: "2024-03-20",
        name: "Taste of Nations",
        description: "A culinary extravaganza blending international flavors and culinary traditions in a fusion festival.",
        willAttend: [],
        willNotAttend: [],
    },{
        "id": "d",
        "date": "2024-05-10",
        "name": "Cultural Mosaic Market",
        "description": "A vibrant marketplace celebrating cultural diversity with authentic foods, crafts, and performances from around the world.",
        "willAttend": [],
        "willNotAttend": []
    },{
        "id": "f",
        "date": "2024-07-25",
        "name": "Nature's Bounty Festival",
        "description": "An outdoor festival celebrating nature's abundance with fresh produce, farm-to-table cuisine, and eco-conscious living exhibits.",
        "willAttend": [],
        "willNotAttend": []
    },
    {
        "id": "g",
        "date": "2024-09-15",
        "name": "Unity Parade",
        "description": "A colorful parade bringing together diverse communities to celebrate unity, diversity, and inclusion through music, dance, and art.",
        "willAttend": [],
        "willNotAttend": []
    }
];

function EvenList() {
    return (
         <div class="shadow rounded" style={{padding: "20px", border: "1px solid black"}}>
            <h1 style={{textAlign: "center", borderBottom: "1px solid #ccc", paddingBottom: "10px"}}>Události</h1>
            { eventList.map((event) => {
                return <EvenCard key={event.id} event={event} userList={userList}/>;
            })}
         </div>
    );
}

export default EvenList;