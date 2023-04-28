import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getItems } from "../../getters/getters";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Close,
  ExpandLess,
  ExpandMore,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";

const Menu = ({ open, setOpen, loggedIn, setDialog, count }) => {
  const [data, setData] = useState([]);
  const [type1open, setType1Open] = useState(false);
  const [type2open, setType2Open] = useState(false);
  const [type3open, setType3Open] = useState(false);
  const [type4open, setType4Open] = useState(false);
  const [type5open, setType5Open] = useState(false);
  const [type6open, setType6Open] = useState(false);
  const [type7open, setType7Open] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getItems().then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    getItems().then((res) => {
      setData(res.data);
      setDialog(false);
    });
  }, [count]);

  const itemsType1 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 1);
    }
  }, [data]);

  const itemsType2 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 2);
    }
  }, [data]);

  const itemsType3 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 3);
    }
  }, [data]);

  const itemsType4 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 4);
    }
  }, [data]);

  const itemsType5 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 5);
    }
  }, [data]);

  const itemsType6 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 6);
    }
  }, [data]);

  const itemsType7 = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 7);
    }
  }, [data]);

  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(255,255,255,0.7)",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        backdropFilter: "blur(5px)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.5s ease-in-out",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "visible",
        p: 2,
      }}
    >
      <List>
        <ListItemButton
          onPointerDown={() => {
            setType1Open(!type1open);
          }}
        >
          <ListItemText primary="Osnovna sirovina" />
          {type1open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={type1open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType1.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setType2Open(!type2open);
          }}
        >
          <ListItemText primary="Pomoćna sirovina" />
          {type2open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={type2open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType2.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setType3Open(!type3open);
          }}
        >
          <ListItemText primary="Alternativna sirovina" />
          {type3open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={type3open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType3.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setType4Open(!type4open);
          }}
        >
          <ListItemText primary="Basic" />
          {type4open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={type4open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType4.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setType5Open(!type5open);
          }}
        >
          <ListItemText primary="Supreme" />
          {type5open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={type5open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType5.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setType6Open(!type6open);
          }}
        >
          <ListItemText primary="Premimum" />
          {type6open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={type6open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType6.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setType7Open(!type7open);
          }}
        >
          <ListItemText primary="MicroGran" />
          {type7open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={type7open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsType7.map((item) => {
              return (
                <ListItemButton
                  key={item.id}
                  sx={{ pl: 4 }}
                  onPointerDown={() => {
                    navigate(`/item/${item.id}`);
                  }}
                >
                  {item.attributes.name}
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
        {loggedIn && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onPointerDown={() => setDialog(true)}
            variant="contained"
            sx={{
              margin: "0 auto",
            }}
          >
            Dodaj novi artikal
          </Button>
        </Box>)}
      </List>
      <IconButton
        onPointerDown={() => setOpen(false)}
        sx={{
          backgroundColor: "white",
          color: "black",
          position: "absolute",
          top: "50%",
          left: "0%",
          transform: open ? "translate(-50% , -50%)" : "translate(0% , -50%)",
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            backgroundColor: "white",
            color: "blue",
          },
        }}
      >
        <KeyboardDoubleArrowRight />
      </IconButton>
      {loggedIn ? (
        <Button
          onPointerDown={() => {
            localStorage.removeItem("token");
            // setLoggedIn(false);
            navigate("/");
          }}
          variant="contained"
          sx={{
            mb: 2,
          }}
        >
          Logout
        </Button>
      ) : (
        <Button
          onPointerDown={() => {
            navigate("/login");
          }}
          variant="contained"
          sx={{
            mb: 2,
          }}
        >
          Login
        </Button>
      )}
    </Box>
  );
};

export default Menu;
