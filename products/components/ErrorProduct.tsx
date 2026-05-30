export const ErrorProduct = ({ message }: { message: string }) => {
	return (
		<div className="flex flex-col items-center justify-center py-20 gap-4">
			<p className="text-red-500">{message}</p>

			<button className="px-4 py-2 bg-black text-white rounded">
				Retry
			</button>
		</div>
	);
};
