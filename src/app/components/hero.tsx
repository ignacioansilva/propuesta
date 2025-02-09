import React from 'react'
import fotito from '../images/fotito.jpg'
import Image from 'next/image'

function Hero() {
  return (
<div className="p-5 mx-auto sm:p-10 md:p-16 bg-red-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<Image src={fotito} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500 object-cover" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">La mejor propuesta de San Valentin de tu vida</a>
			</div>
			<div className="font-semibold dark:text-gray-800 align-center	">
				<p>Esto es una invitacion formal a que pases el 14 de febrero conmigo, Te amo muuuucho</p>
				<br/>
				<p className=' font-semibold text-gray-900'>Confirma tu asistencia, No faltes!!!</p>
			</div>
		</div>
	</div>
</div>
 
  )
}

export default Hero
