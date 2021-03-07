import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import {CartIcon, HeartIcon, ProfileIcon} from "./icons";
import Logo from "./show-big.png"

function NavOne() {
    return (
        <div className="container-header">
            <Navbar expand="lg" style={{backgroundColor : "#FCB800"}}>
                <Col style={{width : "100%" ,height : "100%"}}> <Navbar.Brand href="#home"><img src={Logo} className="logo" width="150px" height="50px"/></Navbar.Brand></Col>
                <Col xs={7} >
                    <Form inline>
                        <Dropdown >
                            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="rounded-0">
                                ALL
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2 rounded-0" style={{width :"600px"}}/>
                        <Button variant="dark" className="rounded-0">Search</Button>
                    </Form>
                </Col>
                <Col>
                    <span style={{margin : "25px"}}><HeartIcon style={{margin : "25px"}}/></span>
                    <span style={{margin : "25px"}}><CartIcon/></span>
                    <span style={{margin : "25px"}}><ProfileIcon style={{margin : "25px"}}/></span>
                </Col>
            </Navbar>

        </div>
    );
}

export default NavOne;
