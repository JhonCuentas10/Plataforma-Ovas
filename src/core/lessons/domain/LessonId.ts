export function isLessonIdValid(id: string): boolean {
	const regexExp =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

	return regexExp.test(id)
}

export function LessonIdNotValidError(id: string): Error {
	return new Error(`Lesson ID ${id} is not valid`)
}
