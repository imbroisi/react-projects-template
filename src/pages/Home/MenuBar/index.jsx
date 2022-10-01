import {
  Container,
  Items,
} from './styles';
import IconMenu from './Icons/IconMenu';
import IconTickets from './Icons/IconTickets';
import IconTheaters from './Icons/IconTheaters';
import IconSearch from './Icons/IconSearch';
import IconAccount from './Icons/IconAccount';

const MenuBar = () => (
  <Container>
    <Items>
      <IconMenu />
    </Items>
    <Items>
      <IconTickets />
      <IconTheaters />
      <IconSearch />
      <IconAccount />
    </Items>

  </Container>
);

export default MenuBar;
