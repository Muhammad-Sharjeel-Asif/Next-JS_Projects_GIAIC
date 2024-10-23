
export default function CountryName({ params }: { params: { country_name: string } }) {
  interface country_info {
    name: string,
    population: number,
    capital: string
  }

  let info: country_info | null = null

  if (params.country_name === 'Pakistan') {
    info = {
      name: params.country_name,
      population: 240.5 * 10 ** 6,
      capital: "Islamabad"

    }
  }else if(params.country_name === 'India') {
    info = {
      name: params.country_name,
      population: 1417 * 10**6,
      capital: 'New Dehli'      
    }
  }else if(params.country_name === 'Bangladesh') {
    info = {
      name: params.country_name,
      population: 169 * 10**6,
      capital: 'Dhaka'      
    }
  }else if(params.country_name === 'Iran') {
    info = {
      name: params.country_name,
      population: 90 * 10**6,
      capital: 'Tehran'      
    }
  }else if(params.country_name === 'Turkey') {
    info = {
      name: params.country_name,
      population: 85.3 * 10**6,
      capital: 'Ankara'      
    }
  }



  return (
    <>
      <div className="text-center text-blue-800 text-4xl space-y-5 mt-16 font-bold">
        <p>The country name is: <b>{info?.name || 'Not found'}</b></p>
        <p>The capital of {info?.name} is: <b>{info?.capital || 'Not found'}</b></p>
        <p>The population of {info?.name} is: <b>{info?.population || 0}</b></p>
      </div>
    </>
  )
}
