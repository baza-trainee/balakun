export const Community = () => {
	return (
		<section className='p-16 mb-32 border border-red-900 rounded-full mx-[210px]'>
			<div className='mx-auto max-w-[700px]'>
				<h3 className='mb-3 text-4xl font-bold text-center'>
					Become a Part of{' '}
					<span className='text-red-900'>Our Community!</span>
				</h3>
				<p className='mb-8 text-center text-black-700'>
					Develop and find new friends, partners, and just good
					people!
				</p>
				<div className='flex gap-8'>
					<div>
						<h4 className='text-[21px] mb-3 font-bold'>
							Want to Teach?
						</h4>
						<p className='mb-4 text-black-700'>
							Create a profile on Balakun to showcase your
							language learning goals and interests.
						</p>
						<button className='px-8 py-3 text-white bg-red-900 rounded-full w-[260px] text-center hover:bg-white active:bg-red-700 duration-300 hover:text-black-1000 border border-red-900 active:text-white'>
							Become a Mentor
						</button>
					</div>
					<div>
						<h4 className='text-[21px] mb-3 font-bold'>
							Want to Learn?
						</h4>
						<p className='mb-4 text-black-700'>
							Create a profile on Balakun to showcase your
							language learning goals and interests.
						</p>
						<button className='px-8 py-3 rounded-full w-[260px] text-center border border-red-900 hover:bg-red-900 active:bg-red-700 duration-300 hover:text-white'>
							Become a Student
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

