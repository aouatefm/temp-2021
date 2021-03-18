import Nav from "react-bootstrap/Nav";
import './NavTwo.css'
function NavTwo() {
    return (
        <div className="App">
            <Nav
                style={{backgroundColor :"#FCB800" ,   borderTop: "1px solid gray" , height :"50px" , justifyContent : "center",alignItems : "center"}}
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <Nav.Link href="/home" className="nav">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" className="nav">Shop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav">Vendor Stores</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav">About us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" className="nav">Become a Vendor</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>FAQ</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    );
}

export default NavTwo;
