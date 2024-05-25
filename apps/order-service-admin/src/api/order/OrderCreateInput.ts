import { CustomerCreateNestedManyWithoutOrdersInput } from "./CustomerCreateNestedManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerCreateNestedManyWithoutOrdersInput;
  discount?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
