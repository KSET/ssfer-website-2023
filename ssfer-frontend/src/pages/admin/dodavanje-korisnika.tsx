import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import AdminLayout from "@/components/admin/AdminLayout";
import KorisnikList from "@/components/admin/DodavanjeKorisnika/KorisnikList";
import DodavanjeKorisnikaForm from "@/components/admin/DodavanjeKorisnika/DodavanjeKorisnikaForm";


const DodavanjeKorisnika = () => {
  return (
    <AdminLayout>
      <Grid direction={"row"} container>
        <Grid item xs={12} md={4}>
          <Typography variant={"h5"} sx={{fontWeight: "bold"}} m={"2rem"}>Korisnici</Typography>
          <KorisnikList/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant={"h5"} sx={{fontWeight: "bold"}} m={"2rem"}>Dodavanje korisnika</Typography>
          <Box mt={"4rem"} ml={"2rem"}>
            <DodavanjeKorisnikaForm/>
          </Box>
        </Grid>
      </Grid>
    </AdminLayout>

  );
};

export default DodavanjeKorisnika;