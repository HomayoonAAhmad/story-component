/*
* Schema::create('businesses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('name')->nullable();
            $table->string('short_description')->nullable();
            $table->string('slug')->nullable();
            $table->string('description')->nullable();
            $table->tinyInteger('_status')->default(1);
            $table->string('website')->nullable();
            $table->dateTime('created_at')->useCurrent();
            $table->dateTime('updated_at')->useCurrent()->useCurrentOnUpdate();
            $table->string('avatar')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('zip')->nullable();
            $table->string('facebook')->nullable();
            $table->string('twitter')->nullable();
            $table->string('instagram')->nullable();
            $table->string('linkedin')->nullable();
            $table->string('whatsapp')->nullable();
            $table->string('meta')->nullable();
            $table->boolean('_destructed')->default(false);
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->engine = 'InnoDB';
        });
* */
enum BusinessStatus {
	Active = 1,
	Deleted = 0,
	UnderReview = 2,
	UnderConstruction = 3,
	UnderDestruction = 4,
}
type Business = {
	id: number | undefined;
	user_id: number | undefined;
	name: string;
	short_description: string;
	slug: string | undefined;
	description: string | null;
	_status: BusinessStatus;
	website: string | null;
	created_at: string | null;
	updated_at: string | null;
	avatar: string | null;
	phone: string | null;
	email: string | null;
	address: string | null;
	city: string | null;
	state: string | null;
	country: string | null;
	zip: string | null;
	facebook: string | null;
	twitter: string | null;
	instagram: string | null;
	linkedin: string | null;
	whatsapp: string | null;
	meta: string | null | undefined;
	_destructed?: boolean;
} | null