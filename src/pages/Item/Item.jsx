import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import style from "../Elixir.module.css";
import { getItem, putItem } from "../../getters/getters";
import {
  Box,
  Button,
  Dialog,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState, useMemo, useRef } from "react";
import { Edit } from "@mui/icons-material";
import { MuiChipsInput } from "mui-chips-input";

export default function Item({ loggedIn }) {
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [chips, setChips] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const materialRef = useRef();
  const productRef = useRef();
  const semiProductRef = useRef();

  const handleChange = (newChips) => {
    setChips(newChips);
  };

  const types = [
    { value: 1, name: "Makro" },
    { value: 2, name: "Mikro" },
    { value: 3, name: "Basic" },
    { value: 4, name: "Supreme" },
    { value: 5, name: "Premium" },
    { value: 6, name: "MicroGran" },
    { value: 7, name: "Alternativne sirovine" },
  ];

  const params = useParams();

  useEffect(() => {
    getItem(params.id).then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    getItem(params.id).then((res) => {
      setData(res.data);
      setChips(res.data.attributes.alternative); // Postavljanje početnih vrednosti čipova
    });
  }, []);

  useEffect(() => {
    getItem(params.id).then((res) => {
      setData(res.data);
      setChips(res.data.attributes.alternative);
      setSelectedType(res.data.attributes.type); // Postavljanje trenutnog tipa stavke
    });
  }, []);

  const item = useMemo(() => {
    if (data) {
      return data.attributes;
    }
  }, [data]);

  const img = useMemo(() => {
    if (item) {
      return item?.image?.data?.attributes?.url
        ? ` https://elixir-strapi.4bees.io${item?.image?.data?.attributes?.url}`
        : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg";
    }
  }, [item]);

  const color = useMemo(() => {
    if (item) {
      if (item.type < 3 ) {
        return "rgb(196, 214, 0)";
      } else if (item.type > 2 && item.type < 5) {
        return "rgb(4, 106, 56)";
      } else if (item.type > 4 ) {
        return "rgb(255, 130, 0)";
      } else {
        return "rgb(0, 150, 200)";
      }
    }
  }, [item]);

  const type = useMemo(() => {
    if (item) {
      if (item.type === 1) {
        return "Osnovna sirovina";
      } else if (item.type === 2) {
        return "Pomoćna sirovina";
      } else if (item.type === 3) {
        return "Alternativna sirovina";
      } else if (item.type === 4) {
        return "Basic";
      } else if (item.type === 5) {
        return "Supreme";
      } else if (item.type === 6) {
        return "Premium";
      } else if (item.type === 7) {
        return "MicroGran";
      } else {
        return "N/A";
      }
    }
  }, [item]);

  const ogType = useMemo(() => {
    if (item) {
      if (item.og_type < 4) {
        return "SIROVINA";
      } else {
        return "GOTOV PROIZVOD";
      }
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    putItem(params.id, {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      material: materialRef.current.value,
      product: productRef.current.value,
      semi_product: semiProductRef.current.value,
      type: selectedType,
      alternative: chips,
    })
      .then((res) => {
        console.log(res);
        getItem(params.id).then((res) => {
          setData(res.data);
          setChips(res.data.attributes.alternative); // Postavljanje početnih vrednosti čipova
          setEdit(false);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box>
      <Navbar />
      {data && (
        <Box
          sx={{
            width: "80%",
            margin: "10vh auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            src={`${img}`}
            alt="elixir"
            style={{ width: "30%", objectFit: "contain" }}
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              width: "60%",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundColor: color,
                borderBottom: "1px solid black",
                p: 1,
                color: "white",
              }}
            >
              NAZIV
            </Typography>
            <Typography
              variant="body1"
              sx={{
                backgroundColor: color,
                borderBottom: "1px solid black",
                p: 1,
                color: "white",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                borderBottom: "1px solid black",
                p: 1,
              }}
            >
              {ogType}
            </Typography>
            <Typography
              sx={{
                borderBottom: "1px solid black",
                p: 1,
              }}
            >
              {type.toUpperCase()}
            </Typography>
            {item.material && (
              <Typography
                sx={{
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                SIROVINA
              </Typography>
            )}
            {item.material && (
              <Typography
                sx={{
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                {item.material}
              </Typography>
            )}
            {item.product && (
              <Typography
                sx={{
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
               PROIZVOD
              </Typography>
            )}
            {item.product && (
              <Typography
                sx={{
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                {item.product}
              </Typography>
            )}
            {item.semi_product && (
              <Typography
                sx={{
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                POLUPROIZVOD
              </Typography>
            )}
            {item.semi_product && (
              <Typography
                sx={{
                  borderBottom: "1px solid black",
                  p: 1,
                }}
              >
                {item.semi_product}
              </Typography>
            )}
            {item.alternative && (
              <>
                <Typography
                  sx={{
                    borderBottom: "1px solid black",
                    p: 1,
                  }}
                >
                  ALTERNATIVA ZA
                </Typography>
                <Box
                  sx={{
                    borderBottom: "1px solid black",
                    p: 1,
                  }}
                >
                  {item.alternative.map((el) => (
                    <Typography>{el}</Typography>
                  ))}
                </Box>
              </>
            )}
            <Typography
              sx={{
                p: 1,
              }}
            >
              POREKLO I KARAKTERISTIKE
            </Typography>
            <Typography
              sx={{
                p: 1,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      )}
      {loggedIn && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: "5vh",
            right: "5vh",
            backgroundColor: "white",
            color: "rgb(0, 150, 200)",
            boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
            "&:hover": {
              backgroundColor: "rgb(0, 150, 200)",
              color: "white",
            },
          }}
          onPointerDown={() => setEdit(true)}
        >
          <Edit />
        </IconButton>
      )}
      {loggedIn && (
        <Dialog open={edit} onClose={() => setEdit(false)}>
          <Box>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  padding: 5,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Typography variant="h4">Izmeni proizvod</Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Naziv artikla"
                    inputRef={nameRef}
                    defaultValue={item?.name}
                    required
                  />
                  <TextField
                    label="Opis artila"
                    inputRef={descriptionRef}
                    defaultValue={item?.description}
                    required
                  />
                  <TextField
                    label="Materijal"
                    inputRef={materialRef}
                    required
                    defaultValue={item?.material}
                  />
                  <TextField
                    label="Proizvod"
                    inputRef={productRef}
                    defaultValue={item?.product}
                  />
                  <TextField
                    label="Poluproizvod"
                    inputRef={semiProductRef}
                    defaultValue={item?.semiproduct}
                  />
                  <FormControl>
                    <InputLabel id="type">Tip</InputLabel>
                    <Select
                      labelId="type"
                      id="type"
                      label="Tip"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      required
                    >
                      {types.map((type, i) => (
                        <MenuItem value={type.value} key={i}>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {selectedType === 3 && (
                    <MuiChipsInput
                      label="Alternativne sirovine"
                      value={chips || []}
                      onChange={handleChange}
                    />
                  )}
                </Box>{" "}
                <Button type="submit" variant="contained">
                  Izmeni
                </Button>
              </Box>
            </form>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}
