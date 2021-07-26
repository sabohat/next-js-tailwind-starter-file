import { StyledTableHeader } from '.'
import { LocationIcon, NearMeIcon, SwapIcon } from '../../../icons/form'
import Button from '../../common/button/Button'
import SelectMenu from '../select/index'
import TextInput from '../input/TextInput'

export default function TableHeader() {
    return (
        <StyledTableHeader>
            <div>
                <SelectMenu
                    // name={field.name}
                    // onChange={(value) => setFieldValue(field.name, value)}
                    // value={values?.[field.name]}
                    // label={field.label}
                    // id={field.id}
                    // required={field?.required > 0}
                    // options={field.property_options}
                    adornment={<LocationIcon />}
                    placeholder="Область"
                />
                <SelectMenu
                    // name={field.name}
                    // onChange={(value) => setFieldValue(field.name, value)}
                    // value={values?.[field.name]}
                    // label={field.label}
                    // id={field.id}
                    // required={field?.required > 0}
                    // options={field.property_options}
                    adornment={<NearMeIcon fill="#7d7d7d" />}
                    placeholder="Округ"
                />
                <SelectMenu
                    // name={field.name}
                    // onChange={(value) => setFieldValue(field.name, value)}
                    // value={values?.[field.name]}
                    // label={field.label}
                    // id={field.id}
                    // required={field?.required > 0}
                    // options={field.property_options}
                    adornment={<SwapIcon />}
                    placeholder="Статус"
                />
            </div>
            <div>
                <TextInput
                    // name={field.name}
                    // onChange={onFieldChange}
                    // value={values?.[field.name]}
                    // label={field.label}
                    // id={field.id}
                    // required={field?.required > 0}
                    placeholder="Поиск"
                />
                <Button primary>DownloadIcon</Button>
            </div>
        </StyledTableHeader>
    )
}
