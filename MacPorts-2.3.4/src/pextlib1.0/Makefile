srcdir = .


include ../../Mk/macports.autoconf.mk

OBJS= \
	Pextlib.o strsed.o fgetln.o md5cmd.o setmode.o xinstall.o \
	fs-traverse.o strcasecmp.o vercomp.o filemap.o base32cmd.o \
	sha1cmd.o curl.o rmd160cmd.o sha256cmd.o readline.o uid.o \
	tracelib.o tty.o readdir.o pipe.o flock.o system.o \
	mktemp.o realpath.o
ifneq (yes,yes)
OBJS+=strlcat.o
endif

# tracelib.o has an additional dependency
tracelib.o: ../darwintracelib1.0/sandbox_actions.h

SHLIB_NAME= Pextlib${SHLIB_SUFFIX}
INSTALLDIR= ${DESTDIR}${TCL_PACKAGE_PATH}/pextlib1.0

include $(srcdir)/../../Mk/macports.tea.mk

CFLAGS+= ${CURL_CFLAGS} ${MD5_CFLAGS} ${READLINE_CFLAGS}
LIBS+= ${CURL_LIBS} ${MD5_LIBS} ${READLINE_LIBS}
ifeq ($(shell uname), Darwin)
LIBS+= ../registry2.0/registry${SHLIB_SUFFIX}
SHLIB_LDFLAGS+= -install_name ${TCL_PACKAGE_PATH}/pextlib1.0/${SHLIB_NAME}
${SHLIB_NAME}: ../registry2.0/registry${SHLIB_SUFFIX}
endif

.PHONY: test

test:: ${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/checksums.tcl ./${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/curl.tcl ./${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/filemap.tcl ./${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/fs-traverse.tcl ./${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/symlink.tcl ./${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/unsetenv.tcl ./${SHLIB_NAME}
	${TCLSH} $(srcdir)/tests/vercomp.tcl ./${SHLIB_NAME}

distclean::
	rm -f Makefile
