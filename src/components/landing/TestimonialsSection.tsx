import lallImg from '../../assets/landing/lall.webp'
import lunnonImg from '../../assets/landing/lunnon.webp'
import fleggImg from '../../assets/landing/flegg.webp'
import reviewImg from '../../assets/landing/review.png'

const testimonials = [
	{
		id: 'testimonial-1',
		name: 'Maheshwari Lall',
		role: 'School Administrator',
		org: 'Redhill Academy',
		location: 'Lagos, NG',
		image: lallImg,
		quote: 'ExcelSchool has transformed our administrative processes, making communication and resource management seamless. The blockchain transparency gave our board complete confidence in financial reporting.',
	},
	{
		id: 'testimonial-2',
		name: 'Jane Lunnon',
		role: 'Dean of Students',
		org: 'Oakbridge University',
		location: 'London, UK',
		image: lunnonImg,
		quote: "ExcelSchool's robust features have streamlined our operations, from attendance tracking to payroll. It's reliable, intuitive, and has significantly enhanced our efficiency across all departments.",
	},
	{
		id: 'testimonial-3',
		name: 'Jamie Flegg',
		role: 'Lead Instructor',
		org: 'Wellington College',
		location: 'Accra, GH',
		image: fleggImg,
		quote: 'Using ExcelSchool has made institutional management so much easier, with instant access to on-chain records and teaching resources. It saves time and boosts our entire team\'s productivity.',
	},
]

function TestimonialsSection() {
	return (
		<section id="about" className="relative z-[1] overflow-hidden bg-neutral-50 py-20 lg:py-28">
			<div className="mx-auto max-w-[1280px] px-5 lg:px-10">
				<div className="mx-auto mb-14 max-w-[600px] text-center">
					<span className="mb-3 inline-block rounded-full bg-neutral-100 px-4 py-1 text-[13px] font-medium text-[#333]">
						Testimonials
					</span>
					<h3 className="text-[30px] font-medium leading-[1.1] text-[#161c25] md:text-[36px]">
						What <span className="font-semibold">Our Clients</span> Say{' '}
						<span className="font-semibold">About Us</span>
					</h3>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{testimonials.map((t) => (
						<article
							key={t.id}
							id={t.id}
							className="group overflow-hidden rounded-[28px] border border-neutral-100 bg-white transition hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
						>
							<div className="flex flex-col">
								{/* Quote content */}
								<div className="p-8">
									<img src={reviewImg} alt="5-star review" className="mb-4 h-[18px]" loading="lazy" />
									<p className="mb-6 text-[16px] font-medium leading-[1.6] text-[#161c25]">
										"{t.quote}"
									</p>
									<div className="flex items-center gap-4">
										<div className="h-[56px] w-[56px] overflow-hidden rounded-full">
											<img src={t.image} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
										</div>
										<div>
											<h6 className="text-[15px] font-semibold text-[#161c25]">{t.name}</h6>
											<span className="text-[13px] text-neutral-500">
												<span className="font-bold text-[#1457d2]">{t.role}</span> | {t.org},{' '}
												<span className="font-bold">{t.location}</span>
											</span>
										</div>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
