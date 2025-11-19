import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z
  .object({
    name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
    avalableFromWeekday: z
      .string()
      .min(1, { message: "Dia da semana é obrigatório" })
      .max(7, { message: "Dia da semana é inválido" }),
    avalableToWeekday: z
      .string()
      .min(1, { message: "Dia da semana é obrigatório" })
      .max(7, { message: "Dia da semana é inválido" }),
    avalableFromTime: z
      .string()
      .trim()
      .min(1, { message: "Hora é obrigatória" }),
    avalableToTime: z.string().trim().min(1, { message: "Hora é obrigatória" }),
    speciality: z
      .string()
      .trim()
      .min(1, { message: "Especialidade é obrigatória" }),
    appoinmentsPrice: z.number().min(1, { message: "Preço é obrigatório" }),
  })
  .refine(
    (data) => {
      return data.avalableFromTime < data.avalableToTime;
    },
    {
      message: "A hora final não pode ser anterior que a hora inicial",
      path: ["avalableToTime"],
    },
  );

const UpsertDoctorForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      avalableFromWeekday: "1",
      avalableToWeekday: "5",
      avalableFromTime: "08:00",
      avalableToTime: "17:00",
      speciality: "",
      appoinmentsPrice: 0,
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <DialogContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Adicionar Médico</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Preencha os campos abaixo para adicionar um novo médico.
          </DialogDescription>
          {/* Nome */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome do médico" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Especialidade */}
          <FormField
            control={form.control}
            name="speciality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Especialidade</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Selecione uma especialidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="max-h-[300px] overflow-y-auto">
                        <SelectItem value="acupuntura">Acupuntura</SelectItem>
                        <SelectItem value="alergologia-imunologia">
                          Alergologia e Imunologia
                        </SelectItem>
                        <SelectItem value="anestesiologia">
                          Anestesiologia
                        </SelectItem>
                        <SelectItem value="angiologia">Angiologia</SelectItem>
                        <SelectItem value="cancerologia">
                          Cancerologia (Oncologia Clínica)
                        </SelectItem>
                        <SelectItem value="cancerologia-cirurgica">
                          Cancerologia Cirúrgica
                        </SelectItem>
                        <SelectItem value="cancerologia-pediatrica">
                          Cancerologia Pediátrica
                        </SelectItem>
                        <SelectItem value="cardiologia">Cardiologia</SelectItem>
                        <SelectItem value="cardiologia-pediatrica">
                          Cardiologia Pediátrica
                        </SelectItem>
                        <SelectItem value="cirurgia-cardiovascular">
                          Cirurgia Cardiovascular
                        </SelectItem>
                        <SelectItem value="cirurgia-cabeca-pescoco">
                          Cirurgia de Cabeça e Pescoço
                        </SelectItem>
                        <SelectItem value="cirurgia-aparelho-digestivo">
                          Cirurgia do Aparelho Digestivo
                        </SelectItem>
                        <SelectItem value="cirurgia-geral">
                          Cirurgia Geral
                        </SelectItem>
                        <SelectItem value="cirurgia-oncologica">
                          Cirurgia Oncológica
                        </SelectItem>
                        <SelectItem value="cirurgia-pediatrica">
                          Cirurgia Pediátrica
                        </SelectItem>
                        <SelectItem value="cirurgia-plastica">
                          Cirurgia Plástica
                        </SelectItem>
                        <SelectItem value="cirurgia-da-mao">
                          Cirurgia da Mão
                        </SelectItem>
                        <SelectItem value="cirurgia-toracica">
                          Cirurgia Torácica
                        </SelectItem>
                        <SelectItem value="cirurgia-vascular">
                          Cirurgia Vascular
                        </SelectItem>
                        <SelectItem value="clinica-medica">
                          Clínica Médica
                        </SelectItem>
                        <SelectItem value="coloproctologia">
                          Coloproctologia
                        </SelectItem>
                        <SelectItem value="dermatologia">
                          Dermatologia
                        </SelectItem>
                        <SelectItem value="endocrinologia-metabologia">
                          Endocrinologia e Metabologia
                        </SelectItem>
                        <SelectItem value="endocrinologia-pediatrica">
                          Endocrinologia Pediátrica
                        </SelectItem>
                        <SelectItem value="endoscopia">Endoscopia</SelectItem>
                        <SelectItem value="gastroenterologia">
                          Gastroenterologia
                        </SelectItem>
                        <SelectItem value="gastroenterologia-pediatrica">
                          Gastroenterologia Pediátrica
                        </SelectItem>
                        <SelectItem value="genetica-medica">
                          Genética Médica
                        </SelectItem>
                        <SelectItem value="geriatria">Geriatria</SelectItem>
                        <SelectItem value="ginecologia">Ginecologia</SelectItem>
                        <SelectItem value="obstetricia">Obstetrícia</SelectItem>
                        <SelectItem value="ginecologia-obstetricia">
                          Ginecologia e Obstetrícia
                        </SelectItem>
                        <SelectItem value="ginecologia-endocrina">
                          Ginecologia Endócrina
                        </SelectItem>
                        <SelectItem value="ginecologia-oncologica">
                          Ginecologia Oncológica
                        </SelectItem>
                        <SelectItem value="hematologia">Hematologia</SelectItem>
                        <SelectItem value="hemoterapia">Hemoterapia</SelectItem>
                        <SelectItem value="hematologia-hemoterapia">
                          Hematologia e Hemoterapia
                        </SelectItem>
                        <SelectItem value="hematologia-pediatrica">
                          Hematologia Pediátrica
                        </SelectItem>
                        <SelectItem value="hepatologia">Hepatologia</SelectItem>
                        <SelectItem value="homeopatia">Homeopatia</SelectItem>
                        <SelectItem value="infectologia">
                          Infectologia
                        </SelectItem>
                        <SelectItem value="infectologia-pediatrica">
                          Infectologia Pediátrica
                        </SelectItem>
                        <SelectItem value="mastologia">Mastologia</SelectItem>
                        <SelectItem value="medicina-de-emergencia">
                          Medicina de Emergência
                        </SelectItem>
                        <SelectItem value="medicina-de-familia-comunidade">
                          Medicina de Família e Comunidade
                        </SelectItem>
                        <SelectItem value="medicina-do-trabalho">
                          Medicina do Trabalho
                        </SelectItem>
                        <SelectItem value="medicina-de-trafego">
                          Medicina de Tráfego
                        </SelectItem>
                        <SelectItem value="medicina-esportiva">
                          Medicina Esportiva
                        </SelectItem>
                        <SelectItem value="medicina-fisica-reabilitacao">
                          Medicina Física e Reabilitação
                        </SelectItem>
                        <SelectItem value="medicina-intensiva">
                          Medicina Intensiva
                        </SelectItem>
                        <SelectItem value="medicina-intensiva-pediatrica">
                          Medicina Intensiva Pediátrica
                        </SelectItem>
                        <SelectItem value="medicina-intensiva-neonatal">
                          Medicina Intensiva Neonatal
                        </SelectItem>
                        <SelectItem value="medicina-legal-pericia-medica">
                          Medicina Legal e Perícia Médica
                        </SelectItem>
                        <SelectItem value="medicina-nuclear">
                          Medicina Nuclear
                        </SelectItem>
                        <SelectItem value="medicina-paliativa">
                          Medicina Paliativa
                        </SelectItem>
                        <SelectItem value="medicina-preventiva-social">
                          Medicina Preventiva e Social
                        </SelectItem>
                        <SelectItem value="nefrologia">Nefrologia</SelectItem>
                        <SelectItem value="nefrologia-pediatrica">
                          Nefrologia Pediátrica
                        </SelectItem>
                        <SelectItem value="neonatologia">
                          Neonatologia
                        </SelectItem>
                        <SelectItem value="neurocirurgia">
                          Neurocirurgia
                        </SelectItem>
                        <SelectItem value="neurologia">Neurologia</SelectItem>
                        <SelectItem value="neurologia-pediatrica">
                          Neurologia Pediátrica
                        </SelectItem>
                        <SelectItem value="nutrologia">Nutrologia</SelectItem>
                        <SelectItem value="oftalmologia">
                          Oftalmologia
                        </SelectItem>
                        <SelectItem value="ortopedia">Ortopedia</SelectItem>
                        <SelectItem value="ortopedia-traumatologia">
                          Ortopedia e Traumatologia
                        </SelectItem>
                        <SelectItem value="otorrinolaringologia">
                          Otorrinolaringologia
                        </SelectItem>
                        <SelectItem value="patologia">Patologia</SelectItem>
                        <SelectItem value="patologia-clinica-laboratorial">
                          Patologia Clínica / Medicina Laboratorial
                        </SelectItem>
                        <SelectItem value="pediatria">Pediatria</SelectItem>
                        <SelectItem value="pneumologia">Pneumologia</SelectItem>
                        <SelectItem value="pneumologia-pediatrica">
                          Pneumologia Pediátrica
                        </SelectItem>
                        <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
                        <SelectItem value="psiquiatria-infantil">
                          Psiquiatria Infantil
                        </SelectItem>
                        <SelectItem value="radiologia-diagnostico-imagem">
                          Radiologia e Diagnóstico por Imagem
                        </SelectItem>
                        <SelectItem value="radioterapia">
                          Radioterapia
                        </SelectItem>
                        <SelectItem value="reumatologia">
                          Reumatologia
                        </SelectItem>
                        <SelectItem value="reumatologia-pediatrica">
                          Reumatologia Pediátrica
                        </SelectItem>
                        <SelectItem value="reproducao-humana">
                          Reprodução Humana
                        </SelectItem>
                        <SelectItem value="urologia">Urologia</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Dias de atendimento */}
          <div className="flex gap-4">
            {/* Dia inicial de atendimento */}
            <FormField
              control={form.control}
              name="avalableFromWeekday"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Dia inicial de atendimento</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o dia inicial de atendimento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="max-h-[300px] overflow-y-auto">
                          <SelectItem value="0">Domingo</SelectItem>
                          <SelectItem value="1">Segunda-feira</SelectItem>
                          <SelectItem value="2">Terça-feira</SelectItem>
                          <SelectItem value="3">Quarta-feira</SelectItem>
                          <SelectItem value="4">Quinta-feira</SelectItem>
                          <SelectItem value="5">Sexta-feira</SelectItem>
                          <SelectItem value="6">Sábado</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Dia final de atendimento */}
            <FormField
              control={form.control}
              name="avalableToWeekday"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Dia final de atendimento</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o dia final de atendimento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="max-h-[300px] overflow-y-auto">
                          <SelectItem value="0">Domingo</SelectItem>
                          <SelectItem value="1">Segunda-feira</SelectItem>
                          <SelectItem value="2">Terça-feira</SelectItem>
                          <SelectItem value="3">Quarta-feira</SelectItem>
                          <SelectItem value="4">Quinta-feira</SelectItem>
                          <SelectItem value="5">Sexta-feira</SelectItem>
                          <SelectItem value="6">Sábado</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Horários de atendimento */}
          <FormLabel className="text-center">Horários de atendimento</FormLabel>
          <div className="flex gap-4">
            {/* Horário inicial de atendimento */}
            <FormField
              control={form.control}
              name="avalableFromTime"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>De</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="max-h-[300px] overflow-y-auto">
                          <SelectLabel>Manhã</SelectLabel>
                          <SelectItem value="05:00">05:00</SelectItem>
                          <SelectItem value="05:30">05:30</SelectItem>
                          <SelectItem value="06:00">06:00</SelectItem>
                          <SelectItem value="06:30">06:30</SelectItem>
                          <SelectItem value="07:00">07:00</SelectItem>
                          <SelectItem value="07:30">07:30</SelectItem>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="08:30">08:30</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="09:30">09:30</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="10:30">10:30</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="11:30">11:30</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="12:30">12:30</SelectItem>
                          <SelectLabel>Tarde</SelectLabel>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="13:30">13:30</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="14:30">14:30</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="15:30">15:30</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="16:30">16:30</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="17:30">17:30</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="18:30">18:30</SelectItem>
                          <SelectLabel>Noite</SelectLabel>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="19:30">19:30</SelectItem>
                          <SelectItem value="20:00">20:00</SelectItem>
                          <SelectItem value="20:30">20:30</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                          <SelectItem value="21:30">21:30</SelectItem>
                          <SelectItem value="22:00">22:00</SelectItem>
                          <SelectItem value="22:30">22:30</SelectItem>
                          <SelectItem value="23:00">23:00</SelectItem>
                          <SelectItem value="23:30">23:30</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Horário final de atendimento */}
            <FormField
              control={form.control}
              name="avalableToTime"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Até</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o horário final de atendimento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup className="max-h-[300px] overflow-y-auto">
                          <SelectLabel>Manhã</SelectLabel>
                          <SelectItem value="05:00">05:00</SelectItem>
                          <SelectItem value="05:30">05:30</SelectItem>
                          <SelectItem value="06:00">06:00</SelectItem>
                          <SelectItem value="06:30">06:30</SelectItem>
                          <SelectItem value="07:00">07:00</SelectItem>
                          <SelectItem value="07:30">07:30</SelectItem>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="08:30">08:30</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="09:30">09:30</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="10:30">10:30</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="11:30">11:30</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="12:30">12:30</SelectItem>
                          <SelectLabel>Tarde</SelectLabel>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="13:30">13:30</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="14:30">14:30</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="15:30">15:30</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="16:30">16:30</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="17:30">17:30</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                          <SelectItem value="18:30">18:30</SelectItem>
                          <SelectLabel>Noite</SelectLabel>
                          <SelectItem value="19:00">19:00</SelectItem>
                          <SelectItem value="19:30">19:30</SelectItem>
                          <SelectItem value="20:00">20:00</SelectItem>
                          <SelectItem value="20:30">20:30</SelectItem>
                          <SelectItem value="21:00">21:00</SelectItem>
                          <SelectItem value="21:30">21:30</SelectItem>
                          <SelectItem value="22:00">22:00</SelectItem>
                          <SelectItem value="22:30">22:30</SelectItem>
                          <SelectItem value="23:00">23:00</SelectItem>
                          <SelectItem value="23:30">23:30</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Adicionar Médico"
              )}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default UpsertDoctorForm;
