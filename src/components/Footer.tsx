const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Data project</strong> by{" "}
                    <strong>
                        <a href="https://ascislowska.netlify.app/">
                            Anna Ścisłowska
                        </a>
                    </strong>
                    . Built with{" "}
                    <strong>
                        {" "}
                        <a href="https://reactjs.org/">
                            <span className="tag  is-link">React</span>
                        </a>
                    </strong>{" "}
                    and{" "}
                    <strong>
                        <a href="/https://recharts.org/">
                            <span className="tag  is-link">Recharts</span>
                        </a>
                    </strong>
                    , styled with{" "}
                    <strong>
                        <a href="https://bulma.io">
                            <span className="tag  is-link">Bulma</span>
                        </a>
                    </strong>
                    .
                </p>
                <p>Thank you!</p>
            </div>
        </footer>
    );
};

export default Footer;
