import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DiseaseCard({
  diseaseName,
  type,
  description,
  remainingdata,
  diseaseimg,
}) {
  return (
    <Card sx={{ maxWidth: 380, minWidth: 380, boxShadow: 5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={diseaseimg}
        style={{ objectFit: "cover", width: "100%", height: "200px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {diseaseName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
