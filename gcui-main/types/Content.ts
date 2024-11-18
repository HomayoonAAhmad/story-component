// Definition of the Content type

type ContentType = {
	id: number;
	content_type_id: number;
	content_type: string | null;
	category_id: number | null;
	title: string;
	slug: string;
	avatar: string | null;
	short_description: string | null;
	description: string | null;
	meta: string | object | null;
	position: number;
	_featured: number;
	_status: number;
	user_id: number | null;
	language_id: string;
	created_at: string;
	updated_at: string;
	published_at: string | null;
	deleted_at: string | null;
	category: string | null;

	user?: {
		id: number;
		name: string;
		avatar: string | null;
		role: string;
		_status: number;
		created_at: string;
		updated_at: string;
		deleted_at: string | null;
	} | null;
} | null

export default ContentType;