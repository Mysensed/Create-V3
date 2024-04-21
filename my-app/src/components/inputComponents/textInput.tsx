import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


type Props = {
    placeholder?: string,
    id: string,
    name: string,
    value?: string,
    type?: string,
    label?: string,
}

export function TextInput( {id, name, value, type, placeholder, label}: Props) {
    return (
     

            <div className="grid w-full max-w-sm items-center gap-1.5 textInput">
                <Label htmlFor={ name }>{ label }</Label>
                <Input 
                    name= { name }
                    type={ type }
                    placeholder= { placeholder }
                />
            </div>
       
    )
}