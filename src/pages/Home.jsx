import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Home.module.css";
import { getItems, postItem, publishItem } from "../getters/getters";
import { Sort } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";
import Menu from "../components/Menu/Menu";

const Home = ({ loggedIn }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [chips, setChips] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [count, setCount] = useState(0);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const materialRef = useRef();
  const productRef = useRef();
  const semiProductRef = useRef();


  const handleChange = (newChips) => {
    setChips(newChips);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postItem({
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      material: materialRef.current.value,
      product: productRef.current.value,
      semiProduct: semiProductRef.current.value,
      type: selectedType,
      alternative: chips,
    }).then((res) => {
      console.log(res);
      publishItem(res.id).then((res) => {
        console.log(res);
        setCount(prev => prev + 1);
      
      });
    });
  };

  const types = [
    { value: 1, name: "Osnovna sirovina" },
    { value: 2, name: "Pomoćna sirovina" },
    { value: 3, name: "Alternativna sirovina" },
    { value: 4, name: "Basic" },
    { value: 5, name: "Supreme" },
    { value: 6, name: "Premium" },
    { value: 7, name: "MicroGran" },
  ];

  return (
    <Box className={style.home}>
      <Sort
        sx={{
          position: "absolute",
          right: "20px",
          top: "20px",
          cursor: "pointer",
          scale: "-1 1",
        }}
        onPointerDown={() => {
          setOpen(!open);
        }}
      />
      <Menu
        open={open}
        setOpen={setOpen}
        loggedIn={loggedIn}
        setDialog={setDialog}
        count={count}
      />
      {loggedIn && (
        <Dialog
          open={dialog}
          onClose={() => setDialog(false)}
          sx={{ width: "100%", height: "100%" }}
        >
          <form>
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
              <Typography variant="h4">Dodavanje novog artikla</Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 3,
                }}
              >
                <TextField label="Naziv artikla" inputRef={nameRef} required />
                <TextField
                  label="Opis artila"
                  inputRef={descriptionRef}
                  required
                />
                <TextField label="Materijal" inputRef={materialRef} required />
                <TextField label="Proizvod" inputRef={productRef} />
                <TextField label="Poluproizvod" inputRef={semiProductRef} />
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
                  value={chips}
                  onChange={handleChange}
                />)}
              </Box>
              <Button type="submit"
              variant="contained"
              onClick={handleSubmit}>
                Dodaj
              </Button>
            </Box>{" "}
          </form>
        </Dialog>
      )}
    </Box>
  );
};

export default Home;
