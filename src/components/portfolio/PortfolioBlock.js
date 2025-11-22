import React, { useState } from 'react';
import { Box, Modal } from "@mui/material";

function PortfolioBlock(props) {
   const { image, title } = props;

   const [open, setOpen] = useState(false);

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         {/* CARD */}
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            sx={{
               width: '100%',
               maxWidth: '350px',
               padding: '1rem',
               borderRadius: '20px',
               margin: '0 auto',
               transition: '0.3s ease',
               cursor: 'pointer',
               '&:hover': {
                  transform: 'scale(1.05)',
               }
            }}
            onClick={handleOpen}
         >
            <Box
               component="img"
               src={image}
               alt={title}
               sx={{
                  width: '300px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                  transition: '0.3s ease',
                  display: 'block',
                  margin: '0 auto',
                  '&:hover': {
                     boxShadow: '0 12px 30px rgba(0,0,0,0.25)'
                  }
               }}
            />

            <Box mt={2}>
               <h1
                  style={{
                     fontSize: '1.3rem',
                     textAlign: 'center',
                     fontWeight: '600',
                     margin: 0,
                  }}
               >
                  {title}
               </h1>
            </Box>
         </Box>

         {/* MODAL ZOOM */}
         <Modal open={open} onClose={handleClose}>
            <Box
               display="flex"
               justifyContent="center"
               alignItems="center"
               sx={{
                  width: '100%',
                  height: '100vh',
                  background: 'rgba(0,0,0,0.8)',
               }}
            >
               <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                     maxWidth: '90%',
                     maxHeight: '90%',
                     borderRadius: '20px',
                     boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
                  }}
               />
            </Box>
         </Modal>
      </>
   );
}

export default PortfolioBlock;
