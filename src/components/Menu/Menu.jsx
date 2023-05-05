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
  const [standardneOpen, setStandardneOpen] = useState(false);
  const [makroOpen, setMakroOpen] = useState(false);
  const [mikroOpen, setMikroOpen] = useState(false);

  const [proizvodiOpen, setProizvodiOpen] = useState(false);
  const [basicOpen, setBasicOpen] = useState(false);
  const [supremeOpen, setSupremeOpen] = useState(false);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [microGranOpen, setMicroGranOpen] = useState(false);

  const [alternativeOpen, setAlternativeOpen] = useState(false);

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

  const itemsTypeMakro = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 1);
    }
  }, [data]);

  const itemsTypeMikro = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 2);
    }
  }, [data]);

  const itemsTypeBasic = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 3);
    }
  }, [data]);

  const itemsTypeSupreme = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 4);
    }
  }, [data]);

  const itemsTypePremium = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 5);
    }
  }, [data]);

  const itemsTypeMicroGran = useMemo(() => {
    if (data) {
      return data.filter((item) => item.attributes.type === 6);
    }
  }, [data]);

  const itemsTypeAlternative = useMemo(() => {
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
            setStandardneOpen(!standardneOpen);
          }}
        >
          <ListItemText primary="Standardne sirovine" />
          {standardneOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={standardneOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onPointerDown={() => {
                setMakroOpen(!makroOpen);
              }}
            >
              <ListItemText primary="Makro" />
              {makroOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={makroOpen} timeout="auto" unmountOnExit>
              {itemsTypeMakro.map((item) => {
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
            </Collapse>
            <ListItemButton
              onPointerDown={() => {
                setMikroOpen(!mikroOpen);
              }}
            >
              <ListItemText primary="Mikro" />
              {mikroOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={mikroOpen} timeout="auto" unmountOnExit>
              {itemsTypeMikro.map((item) => {
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
            </Collapse>
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setProizvodiOpen(!proizvodiOpen);
          }}
        >
          <ListItemText primary="Proizvodi" />
          {proizvodiOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={proizvodiOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onPointerDown={() => {
                setBasicOpen(!basicOpen);
              }}
            >
              <ListItemText primary="Basic" />
              {basicOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={basicOpen} timeout="auto" unmountOnExit>
              {itemsTypeBasic.map((item) => {
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
            </Collapse>
            <ListItemButton
              onPointerDown={() => {
                setSupremeOpen(!supremeOpen);
              }}
            >
              <ListItemText primary="Supreme" />
              {supremeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={supremeOpen} timeout="auto" unmountOnExit>
              {itemsTypeSupreme.map((item) => {
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
            </Collapse>
            <ListItemButton
              onPointerDown={() => {
                setPremiumOpen(!premiumOpen);
              }}
            >
              <ListItemText primary="Premium" />
              {premiumOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={premiumOpen} timeout="auto" unmountOnExit>
              {itemsTypePremium.map((item) => {
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
            </Collapse>
            <ListItemButton
              onPointerDown={() => {
                setMicroGranOpen(!microGranOpen);
              }}
            >
              <ListItemText primary="Micro granul" />
              {microGranOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={microGranOpen} timeout="auto" unmountOnExit>
              {itemsTypeMicroGran.map((item) => {
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
            </Collapse>
          </List>
        </Collapse>
        <ListItemButton
          onPointerDown={() => {
            setAlternativeOpen(!alternativeOpen);
          }}
        >
          <ListItemText primary="Alternativne sirovine" />
          {alternativeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={alternativeOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemsTypeAlternative.map((item) => {
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

        {/* <ListItemButton
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
        </Collapse> */}
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
                bgcolor: "#3A673C",
              }}
            >
              Dodaj novi artikal
            </Button>
          </Box>
        )}
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
            bgcolor: "#3A673C",
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
            bgcolor: "#3A673C",
          }}
        >
          Login
        </Button>
      )}
    </Box>
  );
};

export default Menu;
