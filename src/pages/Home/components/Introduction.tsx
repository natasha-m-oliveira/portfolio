import { Button } from '../../../components/Button'
import { Heading } from '../../../components/Heading'
import { Text } from '../../../components/Text'

export function Introduction() {
  return (
    <div className="min-h-[85vh] scroll-mt-16" id="home">
      <Text className="!text-violet-400" size="lg">
        Olá, me chamo
      </Text>

      <div className="flex flex-col gap-3 mt-4">
        <Heading size="lg">Natasha M Oliveira</Heading>
        <Heading size="lg" className="!text-slate-400">
          Full Stack Developer
        </Heading>
      </div>

      <Text className="max-w-lg my-10" asChild size="lg">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          nostrum at cumque deleniti illum, vitae, voluptatum ducimus voluptate
          impedit neque, ad nam. Voluptatem ad iure unde pariatur voluptatum
          obcaecati rem.
        </p>
      </Text>

      <Button variant="outline" className="w-max">
        Currículo
      </Button>
    </div>
  )
}
