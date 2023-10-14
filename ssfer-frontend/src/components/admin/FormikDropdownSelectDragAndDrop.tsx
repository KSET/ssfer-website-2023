import DropdownSelectDragAndDrop, {DropdownSelectProps} from "@/components/admin/DropdownSelectDragAndDrop";
import {FormikValues, useFormikContext} from "formik";


interface Props {
  name: string;
  label: string;
}

const FormikDropdownSelectDragAndDrop = ({name, label}: Props) => {
  const {values, setFieldValue} = useFormikContext<FormikValues>();

  const items = values[name] as DropdownSelectProps[];
  const onMove = (from: number, to: number) => {
    const dragItem = items[from];
    const newItems = [...items];
    newItems.splice(from, 1);
    newItems.splice(to, 0, dragItem);
    setFieldValue(name, newItems);
  }

  const onIconClick = (index: number) => {
    const newItems = [...items];
    newItems[index].selected = !newItems[index].selected;
    setFieldValue(name, newItems);
  }

  return (
    <DropdownSelectDragAndDrop label={label} items={items} onMove={onMove} onIconClick={onIconClick}/>
  )
}

export default FormikDropdownSelectDragAndDrop;