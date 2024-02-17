import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import "./Card.css";
import { getGenereById } from "./API";

export default function CustomCard({ data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClickAway = () => {
        setExpanded(false);
    };

    let generes = [];
    for (let i = 0; i < data.genre_ids.length; i++) {
        generes.push(getGenereById(data.genre_ids[i]));
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleExpandClick}>
                    <CardMedia
                        component="img"
                        height="250"
                        image={
                            "https://image.tmdb.org/t/p/w500" + data.poster_path
                        }
                        alt="poster"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            <div className="movie-title">
                                {data.original_title}
                            </div>
                            <div className="movie-genere">
                                {generes.join(", ")}
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{data.overview}</Typography>
                        <Typography paragraph>
                            Release Date: {data.release_date}
                        </Typography>
                        {/* <Typography paragraph>IMDB Rating: 7.7</Typography>
                        <Typography paragraph>
                            Cast: Keanu Reeves, Michael Nyqvist, Alfie Allen
                        </Typography> */}
                    </CardContent>
                </Collapse>
            </Card>
        </ClickAwayListener>
    );
}
