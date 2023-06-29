import { useNavigate, useParams } from 'react-router-dom'
import { data } from '../helpers/data'

const AboutCountry = () => {
    const {nameCountry} = useParams()
    const filterCountry = data.find((country) => country.name == nameCountry)
    const navigate = useNavigate()

    const handleBack = () => {
      navigate(-1)
    }

  return (
    <section className='w-screen h-screen flex justify-center flex-col gap-y-8 items-center'>
      <section className="flex flex-col gap-6">
        <button onClick={handleBack} className='w-max border shadow-lg hover:shadow-2xl transition-all duration-150 px-4 py-1 rounded-lg'>
          {`<-- Back`}
        </button>
        <section className='flex gap-24'>
          <article>
            <img src={filterCountry.flags.svg} alt="" />
          </article>
          <article className='flex flex-col justify-center'>
            <h1 className='text-3xl font-bold mb-4'>{filterCountry.name}</h1>
            <section className='grid grid-cols-2'>
              <div>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Native Name:
                  </span>
                  {filterCountry.nativeName}
                </h3>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Population:
                  </span>
                  {filterCountry.population}
                </h3>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Region:
                  </span>
                  {filterCountry.region}
                </h3>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Sub Region:
                  </span>
                  {filterCountry.subregion}
                </h3>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Capital:
                  </span>
                  {filterCountry.capital}
                </h3>
              </div>
              <div>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Top Level Domain:
                  </span>
                  {filterCountry.topLevelDomain && filterCountry.topLevelDomain.map((level, index) => (
                    <span className='mr-1' key={index}>
                      {level}{filterCountry.topLevelDomain.length-1 == index ? '.' : ','}
                    </span>
                  ))}
                </h3>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Currencies:
                  </span>
                  {filterCountry.currencies && filterCountry.currencies.map((level, index) => (
                    <span className='mr-1' key={index}>
                      {level.name}{filterCountry.currencies.length-1 == index ? '.' : ','}
                    </span>
                  ))}
                </h3>
                <h3>
                  <span className='text-sm font-semibold mr-1'>
                    Languages:
                  </span>
                  {filterCountry.languages && filterCountry.languages.map((level, index) => (
                    <span className='mr-1' key={index}>
                      {level.name}{filterCountry.languages.length-1 == index ? '.' : ','}
                    </span>
                  ))}
                </h3>
              </div>
            </section>
            <section className='flex gap-2 items-center mt-4'>
              <span className='text-sm font-semibold mr-1'>
                Border Countries:
              </span>
              <article className='flex gap-2'>
                {filterCountry.borders ? ( filterCountry.borders.map((border, index) => (
                  <div key={index} className='px-4 py-1 shadow-lg text-sm w-max border cursor-pointer'>
                    {border}
                  </div>
                  ))
                ) : ( 
                  <p className='italic text-gray-400'>There are no border countries</p>
                )}
              </article>
            </section>  
          </article>  
        </section>
      </section>
    </section>
  )
}

export default AboutCountry