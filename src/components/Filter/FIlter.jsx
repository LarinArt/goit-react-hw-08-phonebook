import { useDispatch, useSelector } from "react-redux";
import { filter, getFilter } from "redux/contacts/contactsSlice";
import { ContainerSearch, Title, Input } from "./Filter.styled";
import { motion } from "framer-motion";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = (e) => {
    dispatch(filter(e.currentTarget.value.toLocaleLowerCase().trim()));
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }}
    >
      <ContainerSearch>
        <Title>Find contacts by name</Title>
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search name"
        />
      </ContainerSearch>
    </motion.div>
  );
};

export default Filter;
