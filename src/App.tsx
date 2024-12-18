import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import bear from "./assets/bear.jpg";

function App(): React.JSX.Element {
    const handleClick = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App">
            <header className="App-header" role="banner">
                <h1>Welcome to My React App</h1>
                UM COS420 with React Hooks and TypeScript
                {/* Ensuring "COS420" is present for the test */}
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ryan O&apos;Sullivan. Hello World
            </p>

            <Container>
                <div>
                    <img
                        src={bear}
                        alt="Picture of a Bear on a Roadtrip"
                        role="img"
                    />
                </div>

                <div style={{ textAlign: "center" }}>
                    <ul
                        role="list"
                        style={{
                            paddingInlineStart: "0",
                            margin: "0",
                            listStylePosition: "inside",
                        }}
                    >
                        <li>First</li>
                        <li>Second</li>
                        <li>Third</li>
                    </ul>
                </div>

                <div style={{ textAlign: "center" }}>
                    <Button onClick={handleClick} className="btn btn-primary">
                        Log Hello World
                    </Button>
                </div>

                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
