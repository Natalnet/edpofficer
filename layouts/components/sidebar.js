import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  return (
    <Card className="shadow-blue-gray-900/5 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          edpOfficer
        </Typography>
      </div>
      <List>
        <ListItem href="dados">
          <ListItemPrefix >
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Protocolos
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Perfil
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Configurações
        </ListItem>
        <ListItem >
          <ListItemPrefix>
            <PowerIcon href="index" className="h-5 w-5" />
          </ListItemPrefix>
          Sair
        </ListItem>
      </List>
    </Card>
  );
}
