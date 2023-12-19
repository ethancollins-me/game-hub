import {
	Button,
	HStack,
	Image,
	Link,
	List,
	ListItem,
	Skeleton,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem paddingY={"5px"} key={genre.id}>
					<HStack>
						<Image
							boxSize={"32px"}
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Text fontSize={"lg"}>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;