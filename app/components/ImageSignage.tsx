"use client"; // Needed for Next.js App Router

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const images = [
  "/images/sinage1.webp", // Update paths
  "/images/sinage2.webp",
  "/images/sinage3.webp",
  "/images/sinage4.webp",
];

const gridSizes = [4, 8, 8, 4]; // Define alternating sizes

export default function ImageSignage() {
  return (
    <div className="">
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={gridSizes[index]}
              sx={{ height: "400px", width: "100%", borderRadius: "30px" }}
            >
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  borderRadius: "20px",
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .hover-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                {/* Background Image */}
                <Image
                  src={src}
                  alt={`Signage ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />

                {/* Hidden White Block - Shows on Hover */}
                <Box
                  className="hover-content"
                  sx={{
                    justifyContent: "center",
                    borderRadius: "10px",
                    width: "98%",
                    backgroundColor: "white",
                    padding: 2,
                    margin: 2,
                    opacity: 0,
                    transform: "translateY(100%)",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Transform Billboard
                  </Typography>
                  <Typography fontWeight="semibold">
                    Outdoor The Most Advertising
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
