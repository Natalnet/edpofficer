import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
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
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-3 bg-slate-200">
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
      </List>
    </Card>
  );
}
