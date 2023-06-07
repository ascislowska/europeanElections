import { useEffect, useState, useCallback } from "react";
import Text from "./Text";
import about from "../texts/about.md";
import TeamMember from "./TeamMember";
import { fetchJson } from "../helpers/fetchData";
export interface ITeamMember {
    name: { first: string; last: string };
    email: string;
    cell: string;
    picture: { large: string };
    location: { country: string };
    photo: string;
}
const About = () => {
    const [team, setTeam] = useState<ITeamMember[]>([]);
    const teamData = useCallback(async () => {
        const females = await fetchJson(
            "https://randomuser.me/api/?results=2&gender=female",
        );
        const femalesWithPhotos = females.results.map(
            (female: ITeamMember, i: string) => {
                female.photo = `/assets/female/${i}.jpg`;
                return { ...female };
            },
        );
        const males = await fetchJson(
            "https://randomuser.me/api/?results=2&gender=male",
        );
        const malesWithPhotos = males.results.map(
            (male: ITeamMember, i: string) => {
                male.photo = `/assets/male/${i}.jpg`;
                return { ...male };
            },
        );
        setTeam([...femalesWithPhotos, ...malesWithPhotos]);
    }, []);
    useEffect(() => {
        teamData();
    }, []);
    return (
        <div className="container">
            <h2 className="title is-2 ">About</h2>
            <div id="about-data">
                <Text mdFile={about} />
            </div>
            <div className="section">
                <h3 className="title is-3 " id="about-team">
                    Our team
                </h3>
                <div>
                    {team.map((member) => (
                        <div className="content">
                            <TeamMember data={member} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="section">
                <h3 className="title is-3 " id="about-contact">
                    Contact
                </h3>
                <div className="content">555-555-555</div>
                <div className="content">
                    <a href="mailto:mail@mail.com">mail@mail.com</a>
                </div>
            </div>
        </div>
    );
};

export default About;
