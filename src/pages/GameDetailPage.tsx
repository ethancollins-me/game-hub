import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
	const { slug } = useParams();
	const { data: game, error, isLoading } = useGame(slug!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText>{game.description_raw}</ExpandableText>
			<GameAttributes game={game} />
		</>
	);
};

export default GameDetailPage;