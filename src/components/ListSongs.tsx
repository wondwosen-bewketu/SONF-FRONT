import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import Modal from "./Modal/Modal";
import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";
import { toast } from 'react-toastify';

import { Box, Text } from "rebass";
import Layout from "./common/Layout";
import {
  ResponsiveFlex,
  SongCard,
  SongTitle,
  SongArtist,
  SongImage,
  ButtonContainer,
  Button,
  Pagination,
  StyledActiveButton
} from "../assets/style/ListSongsStyle";

const ListSongs: React.FC = () => {
  const dispatch = useDispatch();

  const { songs, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

  //define states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 12; // Display 12 cards per page

  // handle song crud forms modal
  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  if (error) {
    toast.error(error)
  }

  // handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(songs.length / songsPerPage);

  return (
    <Layout>
      <ResponsiveFlex justifyContent="space-between" flexWrap="wrap">
        {isLoading ? (
          <Text
            fontWeight="bold"
            textAlign={"center"}
            fontSize={"1.5rem"}
            marginY={"10%"}
          >
            <FaSpinner />
            Loading...
          </Text>
        ) : (
          currentSongs.map((song: Song) => (
            <SongCard key={song._id}>
              {/* <SongImage src="../../assets/sound-icon.png" /> */}
              <Box flexGrow={1} ml={2}>
                <SongTitle>{song.title}</SongTitle>
                <SongArtist>By: {song.artist}</SongArtist>
              </Box>
              <ButtonContainer>
                <Button
                  onClick={() =>
                    handleOpenModal(
                      <UpdateSong onClose={handleCloseModal} id={song._id} />
                    )
                  }
                >
                  <CiEdit />
                </Button>
                <Button
                  onClick={() =>
                    handleOpenModal(
                      <DeleteSong onClose={handleCloseModal} id={song._id} />
                    )
                  }
                >
                  <MdOutlineDeleteOutline />
                </Button>
              </ButtonContainer>
            </SongCard>
          ))
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          component={modalContent}
        />
      </ResponsiveFlex>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return pageNumber === currentPage ? (
            <StyledActiveButton key={index} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </StyledActiveButton>
          ) : (
            <Button key={index} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </Button>
          );
        })}
      </Pagination>
    </Layout>
  );
};

export default ListSongs;
