import { useContext } from "react";
import GameContext from "../context/GameContext"
import { FaBattleNet } from "react-icons/fa";
import { Container, LogoCointainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBarElements";
import { IconContext } from "react-icons";

const Navbar = () => {
    const {User} = useContext(GameContext);
    
    return (
            <Container>
                <Wrapper>
                    <IconContext.Provider value = {{style: {fontSize: "1.8em"}}}>
                        <Menu>
                            <MenuItem>
                                <LogoCointainer>
                                    <FaBattleNet/>
                                </LogoCointainer>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink>Jugador: {User.name}</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink>Nivel: {User.level}</MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink>Ganancia: ${User.money}</MenuItemLink>
                            </MenuItem>
                        </Menu>
                    </IconContext.Provider>
                </Wrapper>
            </Container>
    );
};

export default Navbar;
