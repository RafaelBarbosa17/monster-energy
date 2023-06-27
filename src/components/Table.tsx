
import { NutritionalInfo } from "./Infos"

const Table = (prop: {nutritional: NutritionalInfo}) => {

    const nutriInfo = prop.nutritional

    return (
        <section id="nutritional" className="min-w-full snap-center flex justify-center">
          <div>
            <h2 className="uppercase text-2xl font-bold">
              informações nutricionais
            </h2>
            <table className="font-inter text-left">
              <thead className="bg-gray text-left">
                <tr>
                  <th className="p-2" scope="col">Ingredientes</th>
                  <th className="p-2" scope="col">Quantidade por 200ml</th>
                </tr>
              </thead>
              <tbody className="bg-black h-72 overflow-y-scroll">
                <tr>
                  <th className="p-2" scope="row">Valor Energetico:</th>
                  <td className="text-center"> { nutriInfo.energetic_value } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Carboidratos:</th>
                  <td className="text-center"> { nutriInfo.carbohydrates } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Açucares:</th>
                  <td className="text-center"> { nutriInfo.sugars } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Sódio:</th>
                  <td className="text-center"> { nutriInfo.sodium } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Vitamina B3 (Niacina):</th>
                  <td className="text-center"> { nutriInfo.vitamin_B3 } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Vitamina B6 (Piridoxina):</th>
                  <td className="text-center"> { nutriInfo.vitamin_B6 } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Vitamina B2 (Riboflavina):</th>
                  <td className="text-center"> { nutriInfo.vitamin_B2 } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Vitamina B12 (Cianocobalamina):</th>
                  <td className="text-center"> { nutriInfo.vitamin_B12 } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Taurina:</th>
                  <td className="text-center"> { nutriInfo.taurine } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Caféina:</th>
                  <td className="text-center"> { nutriInfo.caffeine } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Glucoronolactona:</th>
                  <td className="text-center"> { nutriInfo.glucuronolactone } </td>
                </tr>
                <tr>
                  <th className="p-2" scope="row">Inositol:</th>
                  <td className="text-center"> { nutriInfo.inositol } </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
    )
}

export default Table