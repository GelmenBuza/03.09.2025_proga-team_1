const caption_parser = (caption) => {
    const result = {
        user_name: '',
        post_photo: '',
        post_caption: ''
    };
    const splited_caption = caption.split('|-|').map(ell => ell.trim());
    result.user_name = splited_caption[0];
    result.post_photo = splited_caption[1];
    result.post_caption = splited_caption[2];
    return result;
} 


export const post_parser = (post_obj) => {
    const result = {};
    result.post_id = post_obj.id;
    const parsed_caption = caption_parser(post_obj.caption);
    result.user_name = parsed_caption.user_name;
    if (parsed_caption.post_photo !== 'none') {
        result.post_photo_path = parsed_caption.post_photo;
    } else {
        result.post_photo_url = post_obj.image_url;
    }
    result.post_caption = parsed_caption.post_caption;

    console.log(result)
    return result;
}