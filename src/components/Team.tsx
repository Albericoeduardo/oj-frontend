import { getTeam } from '@/services/api';
import React, { useEffect, useState } from 'react'

interface Person {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
}

const Team = () => {
    const [team, setTeam] = useState<Person[]>([]);

    useEffect(() => {
        const fetchTeam = async () => {
            const data = await getTeam();
            setTeam(data);
        };
        fetchTeam();
    }, []);

  return (
    <div>
        {team.map((person) => (
            <div key={person.id}>
                <img src={person.image} alt={person.name} />
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <p>{person.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Team