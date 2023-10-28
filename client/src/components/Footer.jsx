import { useTheme } from "@emotion/react";
import { shades } from "../theme";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-berween"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            ECOMMERCE
          </Typography>
          <div>
            Cillum id laboris occaecat magna dolore incididunt. Ex labore
            consectetur aute deserunt deserunt sint aliqua eiusmod et esse qui
            reprehenderit ipsum. Do id voluptate esse nostrud. Aliqua dolore id
            eu esse duis labore. Pariatur laborum adipisicing culpa magna sit.
            Magna mollit occaecat consequat dolore in officia veniam aute
            pariatur do id aute enim. Voluptate id ad commodo duis commodo
            pariatur cillum aliquip.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Costumer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>
        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50th North Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px">Email: sorona@gmail.com</Typography>
          <Typography mb="30px">(220)330-5126</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
