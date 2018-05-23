import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';


class Example extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div class="row">
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Tab 1">
                                <div class="container">
                                    <div class="row">
                                        <h1>Company features</h1>
                                    </div>
                                </div>

                            </Tab>
                            <Tab eventKey={2} title="Tab 2">
                                <div class="container">
                                    <div class="row">
                                        <h1>User features</h1>
                                    </div>
                                </div>
                            </Tab>

                        </Tabs>
                    </div>
                </div>


            </div>
        );
    }
}

export default Example;