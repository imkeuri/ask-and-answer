﻿// <auto-generated />
using System;
using BackEnd.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BackEnd.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    partial class AplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BackEnd.Domains.Models.Answer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AskId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("isCorrect")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("AskId");

                    b.ToTable("Answer");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Ask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("QuestId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("QuestId");

                    b.ToTable("Ask");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Quest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Active")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Quest");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.QuestAnswer", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Active")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("NameParticipant")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("QuestId")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("QuestId");

                    b.ToTable("QuestAnswer");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.QuestAnswerDetail", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AnswerId")
                        .HasColumnType("int");

                    b.Property<int>("AnswerQuestId")
                        .HasColumnType("int");

                    b.Property<int?>("QuestAnswerid")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("AnswerId");

                    b.HasIndex("QuestAnswerid");

                    b.ToTable("QuestAnswerDetail");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Usuario", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Password")
                        .HasColumnType("varchar(50)");

                    b.Property<string>("User")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.HasKey("id");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Answer", b =>
                {
                    b.HasOne("BackEnd.Domains.Models.Ask", "Ask")
                        .WithMany("Answers")
                        .HasForeignKey("AskId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Ask");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Ask", b =>
                {
                    b.HasOne("BackEnd.Domains.Models.Quest", "Quest")
                        .WithMany("Asks")
                        .HasForeignKey("QuestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Quest");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Quest", b =>
                {
                    b.HasOne("BackEnd.Domains.Models.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.QuestAnswer", b =>
                {
                    b.HasOne("BackEnd.Domains.Models.Quest", "Quest")
                        .WithMany()
                        .HasForeignKey("QuestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Quest");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.QuestAnswerDetail", b =>
                {
                    b.HasOne("BackEnd.Domains.Models.Answer", "Answer")
                        .WithMany()
                        .HasForeignKey("AnswerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("BackEnd.Domains.Models.QuestAnswer", "QuestAnswer")
                        .WithMany("QuestAnswerDetails")
                        .HasForeignKey("QuestAnswerid");

                    b.Navigation("Answer");

                    b.Navigation("QuestAnswer");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Ask", b =>
                {
                    b.Navigation("Answers");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.Quest", b =>
                {
                    b.Navigation("Asks");
                });

            modelBuilder.Entity("BackEnd.Domains.Models.QuestAnswer", b =>
                {
                    b.Navigation("QuestAnswerDetails");
                });
#pragma warning restore 612, 618
        }
    }
}