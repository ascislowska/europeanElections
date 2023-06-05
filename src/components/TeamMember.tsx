import { ITeamMember } from "./About";

const TeamMember = ({
    data: { name, email, cell, picture, location, photo },
}: {
    data: ITeamMember;
}) => {
    return (
        <div className="card columns">
            <div className="column is-one-quarter">
                <div className="card-image ">
                    <figure className="image is-4by3">
                        <img
                            className="cropped-photo"
                            src={process.env.PUBLIC_URL + photo}
                            alt="Placeholder image"
                        />
                    </figure>
                </div>
            </div>
            <div className="card-content ">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">
                            {name.first} {name.last}
                        </p>
                        <p className="subtitle is-6">
                            <a>{email}</a>
                        </p>
                        <p className="subtitle is-6">{cell}</p>
                    </div>
                </div>

                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>#{location.country} </a>
                    <a href="#">#dataDepartment</a>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
